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
  mutation Authenticate($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      token
    }
  }
`;

export const GET_USER_BY_ID = gql`
  mutation GetUserById($id: Int!) {
    getUserById(id: $id) {
      id
      name
      email
    }
  }
`;

export const BOOKING_MUTATION = gql`
  mutation Booking(
    $userId: Number!
    $IsActive: Boolean!
    $serviceId: Number!
    $professionalId: Number!
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
