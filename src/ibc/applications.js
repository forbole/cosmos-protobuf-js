import * as query from '../../protobuf/ibc/applications/transfer/v1/query_pb_service';
import * as tx from '../../protobuf/ibc/applications/transfer/v1/tx_pb_service';

export default {
  transfer: {
    query,
    tx,
  },
};
