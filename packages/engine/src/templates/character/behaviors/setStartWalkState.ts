import { CharacterComponent } from '../components/CharacterComponent';
import { getComponent } from '../../../ecs/functions/EntityFunctions';
import { addState } from "../../../state/behaviors/addState";
import { CharacterStateTypes } from '../CharacterStateTypes';
import { Entity } from '../../../ecs/classes/Entity';
import { getSignedAngleBetweenVectors } from '../../../common/functions/getSignedAngleBetweenVectors';
import { getCameraRelativeMovementVector } from '../functions/getCameraRelativeMovementVector';


export const setAppropriateStartWalkState = (entity: Entity): void => {
  const actor = getComponent<CharacterComponent>(entity, CharacterComponent as any);

  //const range = Math.PI;
  //const angle = getSignedAngleBetweenVectors(actor.orientation, actor.localMovementDirection ); // getCameraRelativeMovementVector(entity)


  // TODO: handle strafe states
  // TODO: move character by setting localMovementVector or by cameraRelativeMovementVector(vector) that will convert it into local
  //console.warn(angle+' > '+range * 0.8);

  if (actor.localMovementDirection.z === 1) {
    addState(entity, { state: CharacterStateTypes.WALK_START_FORWARD });
  }
  else if (actor.localMovementDirection.z === -1) {
    addState(entity, { state: CharacterStateTypes.WALK_START_BACKWARD });
  }
  else if (actor.localMovementDirection.x === 1) {
    addState(entity, { state: CharacterStateTypes.WALK_START_LEFT });
  }
  else if (actor.localMovementDirection.x === -1) {
    addState(entity, { state: CharacterStateTypes.WALK_START_RIGHT });
  }


};
