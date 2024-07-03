import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation RegisterMutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    register(
      registerInput: { name: $name, email: $email, password: $password }
    ) {
      name
      email
      password
    }
  }
`;

export const AUTHENTICATE_MUTATION = gql`
  mutation AuthenticateMutation($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  mutation GetUserByIdMutation($id: Int!) {
    getUserById(id: $id) {
      id
      name
      email
    }
  }
`;

export const BOOKING_MUTATION = gql`
  mutation BookingMutation(
    $userId: Int!
    $IsActive: Boolean!
    $serviceId: Int!
    $professionalId: Int!
  ) {
    createBooking(
      createBookingInput: {
        userId: $userId
        IsActive: $IsActive
        serviceId: $serviceId
        professionalId: $professionalId
      }
    ) {
      id
    }
  }
`;
