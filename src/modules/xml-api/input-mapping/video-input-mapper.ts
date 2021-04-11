
import { GenericPlayableWithAudioInputMapper } from './generic-av-input-mapper'
import { SrtStreamInput } from '../../../types/inputs/streams'

export class VideoInputMapper extends GenericPlayableWithAudioInputMapper {

	map(input: Element): SrtStreamInput {
		// Map base output attributes
		const output = {
			...super.map(input)
		}

		return output
	}
}
