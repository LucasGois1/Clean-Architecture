import { ServerError } from '../errors/server-error'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}

export const serverError = (): HttpResponse => {
  return {
    statusCode: 500,
    body: new ServerError()
  }
}
