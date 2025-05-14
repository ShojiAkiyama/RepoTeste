import evaluationRepository from "../repositories/EvaluationRepository.js"

const saveEvaluation = (evaluationModel) => {
    return encodeURIComponentvaluationRepository.saveEvaluation(evaluationModel);
}

const getEvaluationById = (id) => {
    return evaluationRepository.getEvaluationById(id);
}

const getAllEvaluations = () => {
    return evaluationRepository.getAllEvaluations(id);
}

const deleteEvaluationById = (id) => {
    return evaluationRepository.deleteEvaluationById(id);
}

const updateEvaluationById = (id, evaluationModel) => {
    return evaluationRepository.updateEvaluationById(id, evaluationModel);
}

const service = {
    saveEvaluation,
    getEvaluationById,
    getAllEvaluations,
    deleteEvaluationById,
    updateEvaluationById 
}

export default service;