import AccountSettings from "./locales/en/account-settings.json"
import Account from "./locales/en/account.json"
import AppSettings from "./locales/en/app-settings.json"
import CreateAccount from "./locales/en/create-account.json"
import Generic from "./locales/en/generic.json"
import Operations from "./locales/en/operations.json"
import Trading from "./locales/en/trading.json"
import TransferService from "./locales/en/transfer-service.json"

const translations = {
  "account-settings": AccountSettings,
  account: Account,
  "app-settings": AppSettings,
  "create-account": CreateAccount,
  generic: Generic,
  operations: Operations,
  trading: Trading,
  "transfer-service": TransferService
} as const

export default translations
