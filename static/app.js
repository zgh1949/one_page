document.addEventListener('DOMContentLoaded', function() {
    const dropArea = document.getElementById('dropArea');
    const htmlFileInput = document.getElementById('htmlFile');
    const fileInfo = document.getElementById('fileInfo');
    const deployForm = document.getElementById('deployForm');
    const result = document.getElementById('result');
    const submitBtn = document.getElementById('submitBtn');
    let selectedFile = null;

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight() {
        dropArea.classList.add('dragover');
    }

    function unhighlight() {
        dropArea.classList.remove('dragover');
    }

    function handleDrop(e) {
        preventDefaults(e);
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    }

    function handleDragOver(e) {
        preventDefaults(e);
        highlight();
    }

    function handleDragEnter(e) {
        preventDefaults(e);
        highlight();
    }

    function handleDragLeave(e) {
        preventDefaults(e);
        if (!dropArea.contains(e.relatedTarget)) {
            unhighlight();
        }
    }

    dropArea.addEventListener('dragenter', handleDragEnter, false);
    dropArea.addEventListener('dragover', handleDragOver, false);
    dropArea.addEventListener('dragleave', handleDragLeave, false);
    dropArea.addEventListener('drop', handleDrop, false);

    dropArea.addEventListener('click', function() {
        htmlFileInput.click();
    });

    htmlFileInput.addEventListener('change', function() {
        handleFiles(this.files);
    });

    function handleFiles(files) {
        if (files.length > 0) {
            const file = files[0];
            if (file.type === 'text/html' || file.name.endsWith('.html')) {
                selectedFile = file;
                fileInfo.textContent = `已选择：${file.name}`;
                fileInfo.style.color = '#4CAF50';
            } else {
                fileInfo.textContent = '请选择HTML文件';
                fileInfo.style.color = '#f44336';
                selectedFile = null;
            }
        }
    }

    deployForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!selectedFile) {
            showResult('请选择HTML文件', 'error');
            return;
        }
        
        const routeKey = document.getElementById('routeKey').value.trim();
        if (!routeKey) {
            showResult('请输入路由地址', 'error');
            return;
        }
        
        submitBtn.disabled = true;
        submitBtn.textContent = '发布中...';
        
        const formData = new FormData();
        formData.append('routeKey', routeKey);
        formData.append('htmlFile', selectedFile);
        
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showResult(`发布成功！访问地址：${window.location.origin}/pages/${routeKey}`, 'success');
            } else {
                showResult(data.message || '发布失败', 'error');
            }
        })
        .catch(error => {
            showResult('发布失败：网络错误', 'error');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = '发布';
        });
    });

    function showResult(message, type) {
        result.textContent = message;
        result.className = type;
        result.style.display = 'block';
        
        setTimeout(() => {
            result.style.display = 'none';
        }, 5000);
    }
});