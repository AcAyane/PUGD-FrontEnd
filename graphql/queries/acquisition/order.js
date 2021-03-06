import gql from "graphql-tag";

const GetOrders = gql`
  query($type: String!) {
    getOrders(type: $type) {
      _id
      status
      establishement
      date
      provider
      delivery_address
      billing_address
      order_lines
      orders
      name
      currency
    }
  }
`;
const GetOrdersCours = gql`
  query($type: String!, $status: String!) {
    getOrders(type: $type, status: $status) {
      _id
      order_number
      status
      establishement
      date
      provider
      delivery_address
      billing_address
      order_lines
      orders
      currency
      name
    }
  }
`;
const GetOrdersReceived = gql`
  query($type: String!, $received: Boolean!) {
    getOrders(type: $type, received: $received) {
      _id
      order_number
      status
      establishement
      date
      provider
      delivery_address
      billing_address
      order_lines
      orders
      currency
    }
  }
`;
const GetOrder = gql`
  query($id: String!) {
    getOrder(id: $id) {
      status
      establishement
      financial_year
      quotation_number
      order_number
      notes
      date
      provider
      type
      delivery_address
      billing_address
      order_lines
      name
      orders
      currency
    }
  }
`;

module.exports = {
  GetOrder,
  GetOrders,
  GetOrdersCours,
  GetOrdersReceived,
};
