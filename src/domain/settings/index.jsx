import { Route, Routes } from "react-router-dom"
import SettingsCard from "../../components/atoms/settings-card"
import FeatureToggle from "../../components/fundamentals/feature-toggle"
import ChannelsIcon from "../../components/fundamentals/icons/channels-icon"
import CoinsIcon from "../../components/fundamentals/icons/coins-icon"
import CrosshairIcon from "../../components/fundamentals/icons/crosshair-icon"
import DollarSignIcon from "../../components/fundamentals/icons/dollar-sign-icon"
import HappyIcon from "../../components/fundamentals/icons/happy-icon"
import MailIcon from "../../components/fundamentals/icons/mail-icon"
import MapPinIcon from "../../components/fundamentals/icons/map-pin-icon"
import TaxesIcon from "../../components/fundamentals/icons/taxes-icon"
import TruckIcon from "../../components/fundamentals/icons/truck-icon"
import UsersIcon from "../../components/fundamentals/icons/users-icon"
import SettingsOverview from "../../components/templates/settings-overview"
import CurrencySettings from "./currencies"
import Details from "./details"
import PersonalInformation from "./personal-information"
import Regions from "./regions"
import ReturnReasons from "./return-reasons"
import Taxes from "./taxes"
import Users from "./users"
import KeyIcon from "../../components/fundamentals/icons/key-icon"

const SettingsIndex = () => {
  return (
    <SettingsOverview>
      <SettingsCard
        heading={"Regions"}
        description={"Manage the markets you will operate within"}
        icon={<MapPinIcon />}
        to={`/admin/settings/regions`}
      />
      <SettingsCard
        heading={"Currencies"}
        description={"Manage the markets you will operate within"}
        icon={<CoinsIcon />}
        to={`/admin/settings/currencies`}
      />
      <SettingsCard
        heading={"Store Details"}
        description={"Manage your business details"}
        icon={<CrosshairIcon />}
        to={`/admin/settings/details`}
      />
      <SettingsCard
        heading={"Shipping"}
        description={"Manage shipping profiles"}
        icon={<TruckIcon />}
        to={`/admin/settings/shipping-profiles`}
        disabled={true}
      />
      <SettingsCard
        heading={"Return Reasons"}
        description={"Manage Order settings"}
        icon={<DollarSignIcon />}
        to={`/admin/settings/return-reasons`}
      />
      <SettingsCard
        heading={"The Team"}
        description={"Manage users of your Medusa Store"}
        icon={<UsersIcon />}
        to={`/admin/settings/team`}
      />
      <SettingsCard
        heading={"Personal Information"}
        description={"Manage your Medusa profile"}
        icon={<HappyIcon />}
        to={`/admin/settings/personal-information`}
      />
      <SettingsCard
        heading={"hello@medusajs.com"}
        description={"Can’t find the answers you’re looking for?"}
        icon={<MailIcon />}
        externalLink={"mailto: hello@medusajs.com"}
      />
      <SettingsCard
        heading={"Tax Settings"}
        description={"Manage taxes across regions and products"}
        icon={<TaxesIcon />}
        to={`/admin/settings/taxes`}
      />
      <FeatureToggle featureFlag="sales_channels">
        <SettingsCard
          heading={"Sales channels"}
          description={"Control which products are available in which channels"}
          icon={<ChannelsIcon />}
          to={`/admin/sales-channels`}
        />
      </FeatureToggle>
      <FeatureToggle featureFlag="publishable_api_keys">
        <SettingsCard
          heading={"API key management"}
          description={"Create and manage API keys"}
          icon={<KeyIcon />}
          to={`/admin/publishable-api-keys`}
        />
      </FeatureToggle>
    </SettingsOverview>
  )
}

const Settings = () => (
  <Routes className="h-full">
    <Route index element={<SettingsIndex />} />
    <Route path="/details" element={<Details />} />
    <Route path="/regions/*" element={<Regions />} />
    <Route path="/currencies" element={<CurrencySettings />} />
    <Route path="/return-reasons" element={<ReturnReasons />} />
    <Route path="/team" element={<Users />} />
    <Route path="/personal-information" element={<PersonalInformation />} />
    <Route path="/taxes" element={<Taxes />} />
  </Routes>
)

export default Settings
