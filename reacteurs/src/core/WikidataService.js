class WikidataService {
    constructor( endpoint ) {
        this.endpoint = endpoint;
        this.sparqlQuery = `SELECT ?infection_sexuellement_transmissible ?infection_sexuellement_transmissibleLabel WHERE {
          SERVICE wikibase:label { bd:serviceParam wikibase:language "fr, en, [AUTO_LANGUAGE]". }
          ?infection_sexuellement_transmissible wdt:P31 wd:Q12198.
        }
        LIMIT 100`;
    }

    async query() {
        const fullUrl = this.endpoint + '?query=' + encodeURIComponent( this.sparqlQuery );
        const headers = { 'Accept': 'application/sparql-results+json' };

        return fetch( fullUrl, { headers } ).then( body => body.json() );
    }
}

export const wikidataService = new WikidataService( 'https://query.wikidata.org/sparql' );
