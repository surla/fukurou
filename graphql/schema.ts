import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Place {
    id: String
    title: String
    location: String
    description: String
    imageUrl: String
    category: String
    users: [String]
  }

  type Query {
    places: [Place]!
  }
`;
