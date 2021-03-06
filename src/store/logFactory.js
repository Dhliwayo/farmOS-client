// A helper function for creating new log items with default properties
export default function ({
  // TODO: Owner should be identified by user id, once we have authentication
  log_owner = '', // eslint-disable-line camelcase
  notes = '',
  quantity = '',
  id = null,
  local_id = null, // eslint-disable-line camelcase
  name = '',
  type = '',
  timestamp = '',
  images = [],
  done = true,
  isCachedLocally = false,
  wasPushedToServer = false,
  isReadyToSync = false,
  remoteUri = '',
  field_farm_asset = [], // eslint-disable-line camelcase
  field_farm_area = [], // eslint-disable-line camelcase
  field_farm_geofield = [], // eslint-disable-line camelcase
} = {}) {
  return {
    log_owner,
    notes,
    quantity,
    id,
    local_id,
    name,
    type,
    timestamp,
    images,
    done,
    isCachedLocally,
    wasPushedToServer,
    isReadyToSync,
    remoteUri,
    field_farm_asset,
    field_farm_area,
    field_farm_geofield,
  };
}
