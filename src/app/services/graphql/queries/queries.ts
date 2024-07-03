import { gql } from "@apollo/client";

export const ALL_USERS_QUERY = gql`
  query getAllUsersMutation {
    getAllUsers {
      id
      name
      email
    }
  }
`;

export const ALL_SERVICES_QUERY = gql`
  query getAllServicesMutation {
    getAllServices {
      id
      title
      description
      category
      professionalId
    }
  }
`;

export const ALL_PROFESSIONALS_QUERY = gql`
  query getAllProfessionalsMutation {
    getAllProfessionals {
      id
      name
      email
    }
  }
`;

export const ALL_BOOKINGS_QUERY = gql`
  query getAllBookingsMutation {
    getAllBookings {
      id
      userId
      IsActive
      serviceId
      professionalId
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query getUserByEmailMutation($email: String!) {
    getUserByEmail(email: $email) {
      id
      name
      email
    }
  }
`;

export const GET_SERVICE_BY_ID = gql`
  query getServiceByIdMutation($id: ID!) {
    getServiceById(id: $id) {
      id
      title
      description
      category
    }
  }
`;

export const GET_PROFESSIONAL_BY_ID = gql`
  query getProfessionalByIdMutation($id: ID!) {
    getProfessionalById(id: $id) {
      id
      name
      email
    }
  }
`;
