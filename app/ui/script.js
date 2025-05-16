// 模拟登录
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // 这里可以添加实际的登录验证逻辑，调用后端接口
    if (username && password) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-container').style.display = 'block';
    } else {
        alert('请输入用户名和密码');
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        // 显示用户消息
        const chatArea = document.getElementById('chat-area');
        const userMessage = document.createElement('p');
        userMessage.textContent = `你: ${userInput}`;
        chatArea.appendChild(userMessage);

        // 调用后端接口
        fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        })
        .then(response => response.json())
        .then(data => {
            // 显示回复消息
            const responseMessage = document.createElement('p');
            responseMessage.textContent = `Bot: ${data.message}`;
            chatArea.appendChild(responseMessage);
        })
        .catch(error => {
            console.error('Error:', error);
        });

        // 清空输入框
        document.getElementById('user-input').value = '';
    }
}

// 搜索本地视频
function searchVideos() {
    const videoFileInput = document.getElementById('video-file');
    const files = videoFileInput.files;
    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            console.log('选择视频:', files[i].name);
            // 这里后端接口
        }
    } else {
        alert('请至少选择一个视频文件');
    }
}