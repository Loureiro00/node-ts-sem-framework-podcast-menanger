import { PodcastTranferModel } from "../models/podcast-tranfer-model";
import {repositoryPodcast} from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTranferModel> => {
// definoo o contrato da interface
let responseFormat: PodcastTranferModel = {
    statusCode: 0,
    body: []
}

//buscando os dados
    const data = await repositoryPodcast();
// verifica se tem conteudo
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    }

    return responseFormat
}