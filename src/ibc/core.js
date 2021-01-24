import * as channelQuery from '../../protobuf/ibc/core/channel/v1/query_pb_service';
import * as channelTx from '../../protobuf/ibc/core/channel/v1/tx_pb_service';

import * as clientQuery from '../../protobuf/ibc/core/client/v1/query_pb_service';
import * as clientTx from '../../protobuf/ibc/core/client/v1/tx_pb_service';

import * as connectionQuery from '../../protobuf/ibc/core/connection/v1/query_pb_service';
import * as connectionTx from '../../protobuf/ibc/core/connection/v1/tx_pb_service';

export default {
  channel: {
    query: channelQuery,
    tx: channelTx,
  },
  client: {
    query: clientQuery,
    tx: clientTx,
  },
  connection: {
    query: connectionQuery,
    tx: connectionTx,
  },
};
