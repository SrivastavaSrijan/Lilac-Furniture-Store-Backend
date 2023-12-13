export const CreatePaymentIntent = `
type AmountDetails {
  tip: Tip
}

type AutomaticPaymentMethods {
  allow_redirects: String
  enabled: Boolean
}

type Card {
  installments: Int
  mandate_options: JSON
  network: String
  request_three_d_secure: String
}

type Metadata {
  """ Define your metadata fields here if you have any """ 
}

type PaymentMethodOptions {
  card: Card
}

type Tip {
  """ Define your Tip fields here if you have any """ 
}

type CreatePaymentIntent {
  id: String
  object: String
  amount: Int
  amount_capturable: Int
  amount_details: AmountDetails
  amount_received: Int
  application: JSON
  application_fee_amount: JSON
  automatic_payment_methods: AutomaticPaymentMethods
  canceled_at: JSON
  cancellation_reason: JSON
  capture_method: String
  client_secret: String
  confirmation_method: String
  created: Int
  currency: String
  customer: JSON
  description: JSON
  invoice: JSON
  last_payment_error: JSON
  latest_charge: JSON
  livemode: Boolean
  metadata: Metadata
  next_action: JSON
  on_behalf_of: JSON
  payment_method: JSON
  payment_method_configuration_details: JSON
  payment_method_options: PaymentMethodOptions
  payment_method_types: [String]
  processing: JSON
  receipt_email: JSON
  review: JSON
  setup_future_usage: JSON
  shipping: JSON
  source: JSON
  statement_descriptor: JSON
  statement_descriptor_suffix: JSON
  status: String
  transfer_data: JSON
  transfer_group: JSON
}
`;
