// put your GraphQL requests here (in one file or different ones)
import { gql } from "@apollo/client";

export const COUNTRIES = gql `
query Countries {
  countries {
    id
    code
    name
    emoji
    continent {
      id
      name
    }
  }
}`;

export const COUNTRY = gql `
query Country($code: String!) {
  country(code: $code) {
    id
    code
    name
    emoji
    continent {
      id
      name
    }
  }
}`

export const ADD_COUNTRY = gql `
mutation AddCountry($data: NewCountryInput!) {
  addCountry(data: $data) {
    id
    code
    name
    emoji
  }
}`;