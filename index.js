var xhr = new XMLHttpRequest();

    // 指定通信过程中状态改变时的回调函数
    xhr.onreadystatechange = function() {
        // 通信成功时，状态值为4
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('success')
                var res = JSON.parse(xhr.responseText);
                console.log('res:', res);
                console.log('res.avatar_url:', res.avatar_url);
               document.getElementById('avatar').src = res.avatar_url;

                document.getElementById('aaa').href = res.blog;
            } else {
                console.error(xhr.statusText);
            }
        }
    };

    xhr.onerror = function(e) {
        console.error(xhr.statusText);
    };

    // open方式用于指定HTTP动词、请求的网址、是否异步
    xhr.open('GET', 'https://api.github.com/users/defunkt', true);

    // 发送HTTP请求
    xhr.send(null);