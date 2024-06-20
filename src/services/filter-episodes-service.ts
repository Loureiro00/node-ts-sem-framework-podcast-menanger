import { repositoryPodcast } from "../repositories/podcast-repository";
import { PodcastTranferModel } from "../models/podcast-tranfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTranferModel> => {
    // define a interface de retorno
    let responseFormat: PodcastTranferModel = {
        statusCode : 0,
        body: []
    }
    //buscando os dados
    const queryString = podcastName?.split("?p=")[1] ?? ""
    const data = await repositoryPodcast(queryString);
    
    // verifica se tem conteudo
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    }

    return responseFormat;
};