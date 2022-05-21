# express web server demo
nodejs express web server hello world demo

# Build
```
docker image build -t docker-demo:v1 ./
docker run -p 8080:8080 -d docker-demo:v1
```

# Test
```
curl -i localhost:8080

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 11
ETag: W/"b-Ck1VqNd45QIvq3AZd8XYQLvEhtA"
Date: Sat, 21 May 2022 02:32:32 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Hello World
```
