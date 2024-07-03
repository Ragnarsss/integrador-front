import { gql } from "@apollo/client";

export const ALL_SERVICES_QUERY = gql`
  query getAllServices {
    getAllServices {
      id
      title
      description
      category
      professionalId
    }
  }
`;

export const GET_SERVICE_BY_ID = gql`
  query getServiceById($id: ID!) {
    getServiceById(id: $id) {
      id
      title
      description
      category
    }
  }
`;

export const GET_PROFESSIONAL_BY_ID = gql`
  query getProfessionalById($id: ID!) {
    getProfessionalById(id: $id) {
      id
      name
      email
    }
  }
`;
