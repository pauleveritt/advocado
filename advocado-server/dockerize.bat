call ./gradlew.bat build
docker build -t advocado-server .
docker run -it -p 5000:5000 --rm --name advocado-server advocado-server
