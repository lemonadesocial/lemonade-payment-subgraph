import {
  FeeCollected as FeeCollectedEvent,
} from "../generated/LemonadePaymentConfigRegistry/LemonadePaymentConfigRegistry"
import {
  FeeCollected,
} from "../generated/schema"

export function handleFeeCollected(event: FeeCollectedEvent): void {
  let entity = new FeeCollected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eventId = event.params.eventId
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
