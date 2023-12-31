module.exports = {
tutorialSidebar: [
    'index', {'Guides': 
    [{'Writing services': ['guides/Guide_11_Consumes_Basics', 'guides/Guide_12_Batch_Consuming', 'guides/Guide_21_Produces_Basics', 'guides/Guide_22_Partition_Keys', 'guides/Guide_23_Batch_Producing', 'guides/Guide_05_Lifespan_Handler', 'guides/Guide_07_Encoding_and_Decoding_Messages_with_FastKafka', 'guides/Guide_24_Using_Multiple_Kafka_Clusters']}, {'Testing': ['guides/Guide_33_Using_Tester_class_to_test_fastkafka', 'guides/Guide_31_Using_redpanda_to_test_fastkafka']}, {'Documentation generation': ['guides/Guide_04_Github_Actions_Workflow']}, {'Deployment': ['guides/Guide_30_Using_docker_to_deploy_fastkafka', 'guides/Guide_32_Using_fastapi_to_run_fastkafka_application']}, {'Benchmarking': ['guides/Guide_06_Benchmarking_FastKafka']}]},{'API': ['api/fastkafka/EventMetadata', 'api/fastkafka/FastKafka', 'api/fastkafka/KafkaEvent', {'encoder': ['api/fastkafka/encoder/AvroBase', 'api/fastkafka/encoder/avro_decoder', 'api/fastkafka/encoder/avro_encoder', 'api/fastkafka/encoder/avsc_to_pydantic', 'api/fastkafka/encoder/json_decoder', 'api/fastkafka/encoder/json_encoder']}, {'executors': ['api/fastkafka/executors/DynamicTaskExecutor', 'api/fastkafka/executors/SequentialExecutor']}, {'testing': ['api/fastkafka/testing/ApacheKafkaBroker', 'api/fastkafka/testing/LocalRedpandaBroker', 'api/fastkafka/testing/Tester']}]},{'CLI': ['cli/fastkafka', 'cli/run_fastkafka_server_process']},
    "LICENSE",
    "CONTRIBUTING",
    "CHANGELOG",
],
};