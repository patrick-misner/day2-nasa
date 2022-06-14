import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class PodService {

  async getPod(){
    logger.log('podservice hit')
    const res = await api.get()
    AppState.pod = res.data
    logger.log('res-data', AppState.pod)
  }

}

export const podService = new PodService()