FROM golang:1.25.6-alpine AS builder

WORKDIR /app

COPY ./hello-world.go .

RUN go build -o hello-world hello-world.go

ENTRYPOINT [ "./hello-world" ]

FROM alpine:latest AS runner

WORKDIR /app

COPY --from=builder /app/hello-world .

ENTRYPOINT [ "./hello-world" ]
