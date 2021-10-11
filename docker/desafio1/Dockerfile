FROM golang:1.16 AS builder
WORKDIR /go/src/github.com/cristiano23lima/fullcycle/
RUN go get -d -v golang.org/x/net/html  
COPY app.go    ./
RUN go mod init
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM hello-world:latest  
WORKDIR /root/
COPY --from=builder /go/src/github.com/cristiano23lima/fullcycle/app ./
CMD ["./app"]