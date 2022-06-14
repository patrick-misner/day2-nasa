import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class PodService {

  async getPod(){
    const res = await api.get()
    AppState.pod = res.data
    logger.log('res-data', AppState.pod)
  }
  async getDate(date){
    logger.log('date-log', date)
    const res = await api.get('', { params: { date } })
    logger.log(res.data)
    AppState.pod = res.data
  }

}

export const podService = new PodService()