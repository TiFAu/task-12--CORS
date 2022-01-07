// еперь воспользуемся готовым прокси-сервером

// Для этого добавим в запросе урл прокси: https://cors-anywhere.herokuapp.com/

fetch ( "http://filesdownloader.com/?url=http://humor.fm/uploads/posts/2016-03/17/umndflr0wjc.jpg" )
    .then ( response => response.blob()
        .then ( blob => document.body.appendChild (
            document.createElement ( "img" )
        ).src = URL.createObjectURL ( blob ) )
    )
// Теперь наш запрос благополучно проходит, на странице появляется картинка, а во вкладке Network можно увидеть такие заголовки ответа:

// ▼ Response Headers
//     Accept-Ranges: bytes
//     Access-Control-Allow-Origin: *
//     Access-Control-Expose-Headers: server,date,content-type,content-length,last-modified,connection,etag,expires,cache- 
//     control,accept-ranges,x-final-url,access-control-allow-origin
//     Cache-Control: max-age=604800
//     Connection: keep-alive
//     Content-Length: 127387
//     Content-Type: image/jpeg
//     Date: Tue, 19 Mar 2019 08:31:09 GMT
//     Etag: "56ea8363-1f19b"
//     Expires: Tue, 26 Mar 2019 08:31:09 GMT
//     Last-Modified: Thu, 17 Mar 2016 10:13:55 GMT
//     Server: nginx/1.12.2
//     Via: 1.1 vegur
//     X-Final-Url: http://humor.fm/uploads/posts/2016-03/17/umndflr0wjc.jpg
//     X-Request-Url: http://humor.fm/uploads/posts/2016-03/17/umndflr0wjc.jpg
// Прокси-сервер добавил необходимые заголовки к ответу, и браузер вернул нам ответ - файл изображения получен