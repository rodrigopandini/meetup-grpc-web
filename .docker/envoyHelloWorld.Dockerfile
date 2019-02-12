FROM envoyproxy/envoy:latest
COPY ./envoyHelloWorld.yaml /etc/envoy/envoyHelloWorld.yaml
CMD /usr/local/bin/envoy -c /etc/envoy/envoyHelloWorld.yaml