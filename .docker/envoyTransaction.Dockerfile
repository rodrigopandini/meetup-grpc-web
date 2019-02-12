FROM envoyproxy/envoy:latest
COPY ./envoyTransaction.yaml /etc/envoy/envoyTransaction.yaml
CMD /usr/local/bin/envoy -c /etc/envoy/envoyTransaction.yaml