# Update TinyCC Redirects

The following command adds new redirects (and fails and ignores for
existing hashes): Insert the JSON (up to 100 items) as the
`--data-binary` parameter and Add the Basic Authorization key as a
`--header` parameter. You can get the Basic Authorization key by logging
into
[TinyCC](https://tinycc.com/)
then going to the
[API console](https://tinycc.com/tiny/api-console).

To use `yaml2jason.rb`, write changes to `urls.yaml`. Then run
the program without any parameters. It will create or overwrite
`urls.json`.

To add URLs, assure you are not adding more than 100 redirects at once,
assure the key for the hash is "custom_hash", then:

```bash
curl -L -X POST \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --header 'Authorization: Basic <From api-console. Not api key!>' \
  --data-binary @urls.json \
  https://tinycc.com/tiny/api/3/urls
```

To change URLs, assure you are not adding more than 100 redirects at once,
assure the key for the hash is "hash", then:

```bash
curl -L -X PATCH \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --header 'Authorization: Basic <From api-console. Not api key!>' \
  --data-binary @urls.json \
  https://tinycc.com/tiny/api/3/urls
```

During changing, the API ignores records with hashes that do not already
exist.

The [API documentation](https://tinycc.com/tiny/api-docs)
