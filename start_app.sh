# Variables
AWS_REGION="eu-north-1"
AWS_ACCOUNT_ID="730335514249"
IMAGE_NAME="greetings-app"
IMAGE_TAG="latest"

$(aws ecr get-login --no-include-email --region $AWS_REGION)
docker pull $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$IMAGE_NAME:$IMAGE_TAG

CONTAINER_ID=$(docker ps -q -f name=$IMAGE_NAME)
if [ -n "$CONTAINER_ID" ]; then
  echo "Stopping existing container $CONTAINER_ID..."
  docker stop $CONTAINER_ID
fi

CONTAINER_ID=$(docker ps -a -q -f name=$IMAGE_NAME)
if [ -n "$CONTAINER_ID" ]; then
  echo "Removing existing container $CONTAINER_ID..."
  docker rm $CONTAINER_ID
fi

docker run -d --name $IMAGE_NAME $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$IMAGE_NAME:$IMAGE_TAG


