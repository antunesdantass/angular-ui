'use strict';
(function () {
    const app = angular.module("sadApp");

    app.controller("VisualizarRespostasController", function VisualizarRespostasController($state, $stateParams, questionarios) {

        var self = this;
        self.questionarios = questionarios || [];
        self.semestre = "2017.2";

        self.irParaResposta = function(id) {
            const params = {
               idQuestionario : id,
               semestre: self.semestre
            }
            $state.go("sad-resposta.visualizar-resposta", params);
        }
    });
})();
