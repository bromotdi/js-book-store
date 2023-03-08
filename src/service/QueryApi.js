export default class QueryApi {
  URL = 'https://js-band-store-api.glitch.me';

  static instance = null;

  static getInstance() {
    QueryApi.instance = QueryApi.instance ?? new QueryApi();

    return QueryApi.instance;
  }

  async query(method, path, token, data) {
    let response = null;

    try {
      const request = await fetch(this.URL + path, {
        method,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token ? `Bearer ${token}` : false,
        },
        body: JSON.stringify(data),
      });

      response = {
        ok: request.ok,
        data: await request.json(),
      };
    } catch (error) {
      response = {
        ok: false,
        data: { message: 'Network error, please, try again' },
      };
    }

    return response;
  }

  async signin(username) {
    const request = await this.query('POST', '/signin', false, {
      username,
    });

    return request;
  }

  async loadBooks(token) {
    const request = await this.query('GET', '/books', token);

    return request;
  }

  async loadBookById(id, token) {
    const request = await this.query('GET', `/books/${id}`, token);

    return request;
  }

  async purchase(data, token) {
    const request = await this.query('POST', '/purchase', token, {
      books: data,
    });

    return request;
  }
}
