sudo docker build -t hleal18/indecision-app . && \
sudo docker push hleal18/indecision-app:latest && \
k delete deploy indecision-app && \
k create deploy indecision-app --image=hleal18/indecision-app && \
k get pods -w

sudo docker build -t hleal18/indecision-app . && \
sudo docker push hleal18/indecision-app:latest && \
sudo docker stop indecision-app && \
sudo docker rm indecision-app && \
sudo docker run -d -p 8080:8080 --name indecision-app hleal18/indecision-app

sudo docker exec -it indecision-app /bin/sh