class Client {
  fetchCities({ lat, lng }: GeographicalPoint) {
    return fetch(
      `${process.env.REACT_APP_OPEN_WEATHER_API_URL}/find?lat=${lat}&lon=${lng}&cnt=15&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
    ).then(this.parseResponseToJson)
  }

  private parseResponseToJson(response: Response) {
    return response.json()
  }
}

const client = Object.freeze(new Client())

export default client
