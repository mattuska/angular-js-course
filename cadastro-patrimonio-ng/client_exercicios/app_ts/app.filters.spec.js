'use strict';
describe('testes de cadpatFilters', function () {
    beforeEach(angular.mock.module('cadpatFilters'));
    describe('maiusculo', function () {
        it('Deve converter corretamente para maiúsculo', inject(function (maiusculoFilter) {
            expect(maiusculoFilter('foo')).toBe('FOO');
        }));
        it('Deve suportar strings nulas', inject(function (maiusculoFilter) {
            expect(maiusculoFilter(null)).toBe('');
        }));
    });
});
