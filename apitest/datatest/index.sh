curl -X 'POST' -H 'Content-Type:application/json' -d @datasource_index.json localhost:8090/druid/indexer/v1/task
curl -X 'POST' -H 'Content-Type:application/json' -d @datasource_forbidden_index.json localhost:8090/druid/indexer/v1/task