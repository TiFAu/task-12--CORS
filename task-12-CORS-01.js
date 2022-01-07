fetch ( "http://humor.fm/uploads/posts/2016-03/17/umndflr0wjc.jpg" )
    .then ( response => response.text()
        .then ( response => console.log ( response ) )
    )

// Ответ будет заблокирован браузером
//     ⛔️ Access to fetch at 'http://humor.fm/uploads/posts/2016-03/17/umndflr0wjc.jpg' 
//     from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' 
//     header is present on the requested resource. If an opaque response serves your needs, 
//     set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
//     Во вкладке Network отладчика можно посмотреть заголовки ответа:

// ▼ Response Headers
//     Accept-Ranges: bytes
//     Cache-Control: max-age=604800
//     Content-Length: 127387
//     Content-Type: image/jpeg
//     Date: Tue, 19 Mar 2019 08:30:36 GMT
//     ETag: "56ea8363-1f19b"
//     Expires: Tue, 26 Mar 2019 08:30:36 GMT
//     Last-Modified: Thu, 17 Mar 2016 10:13:55 GMT
//     Server: nginx/1.12.2
// Как мы видим, Access-Control-Allow-Origin отсутствует, что и становится причиной блокирования браузером ответа

