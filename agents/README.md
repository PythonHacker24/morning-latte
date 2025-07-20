# Mike - A Newsletter Analyst

## Build Instructions

**Make sure to updat .env**

### Build Docker Image
```bash
docker build -t mike-agent .
```

### Run Docker Container
```bash
docker run -e DEEPSEEK_API_KEY=$DEEPSEEK_API_KEY \
           -e DEEPSEEK_API_BASE_URL=$DEEPSEEK_API_BASE_URL \
           -p 7777:7777 \
           mike-agent
```

Another option is one command deployment with docker-compose:
### Docker Compose (One Command Deployment)
```bash
docker-compose up --build
```

## Deploy

### Endpoint

```bash
POST http://localhost:7777/process-newsletter
```

### Request Body

```bash
{
  "html": "<html>YOUR_NEWSLETTER_HTML</html>"
}
```

### Response Body

```bash
{
  "trends": ["..."],
  "insights": ["..."],
  "market_impacts": ["..."],
  "summary": "..."
}
```