FROM mongo

COPY summaries.json /summaries.json
CMD mongoimport --host mongodb --db kelp-summaries --collection restaurants --type json --file /summaries.json
