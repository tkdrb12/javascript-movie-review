interface ITheater {
  load(page: number, env: Env): Promise<any>;
  getMoviesByKeyword(page: number, query: string, env: Env): Promise<any>;
}

interface Env {
  env: 'dev' | 'pro';
}

const REDIRECT_SERVER_HOST = 'https://ornate-swan-ce5a5e.netlify.app';

const parsePath = ({ env }: Env) => {
  if (env === 'dev') {
    return '/.netlify/functions/dummy/tmdb/movie/popular';
  }

  return '/tmdb/movie/popular';
};

class Theater implements ITheater {
  async load(page: number, env: Env = { env: 'pro' }): Promise<any> {
    const path = parsePath(env);

    const url = new URL(`${path}?page=${page}`, REDIRECT_SERVER_HOST);

    const parameters = new URLSearchParams({});
    url.search = parameters.toString();

    const response = await fetch(url, {
      method: 'GET',
    });

    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.error.message);
    }

    return body;
  }

  async getMoviesByKeyword(page: number, keyword: string, env: Env = { env: 'pro' }): Promise<any> {
    const path = parsePath(env);

    const url = new URL(`${path}?page=${page}&query=${keyword}`, REDIRECT_SERVER_HOST);

    const parameters = new URLSearchParams({});
    url.search = parameters.toString();

    const response = await fetch(url, {
      method: 'GET',
    });

    const body = await response.json();

    if (!response.ok) {
      throw new Error(body.error.message);
    }

    return body;
  }
}

export { Theater };
