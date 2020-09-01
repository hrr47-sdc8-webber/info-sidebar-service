DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

DATABASE="restaurants"
USER="henrybell"

OUTPUT="restaurants.csv"
FILEPATH="$DIR/$OUTPUT"

LINES=${1:-1000000}

SCHEMA="$DIR/schema.sql"
psql -U $USER < $SCHEMA

node seed.js --output=$FILEPATH --lines=$LINES

psql -U $USER -d $DATABASE -c "COPY $DATABASE FROM '$FILEPATH' CSV HEADER;

