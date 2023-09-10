'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('1 повторяющаяся группа, 1 индивидуальный символ', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
	});
	QUnit.test('Много групп', function (assert) {
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});
	QUnit.test('Нет повторений', function (assert) {
		assert.strictEqual(rle('ABC'), 'ABC');
	});
	QUnit.test('Повторяется через букву', function (assert) {
		assert.strictEqual(rle('ABCB'), 'ABCB');
	});
	QUnit.test('Цифры', function (assert) {
		assert.strictEqual(rle('2222224444'), '2644');
	});
	QUnit.test('Не Цифры', function (assert) {
		assert.strictEqual(rle('....---'), '.4-3');
	});
	QUnit.test('new String()', function (assert) {
		assert.strictEqual(rle(new String("ADDD")), "AD3");
	});
	QUnit.test('Пустая строка', function (assert) {
		assert.strictEqual(rle(""), "");
	});
	QUnit.test('Пустая строка new String()', function (assert) {
		assert.strictEqual(rle(new String()), "");
	});
	QUnit.test('null', function (assert) {
		assert.throws(() => rle(null), TypeError);
	});
	QUnit.test('inf', function (assert) {
		assert.throws(() => rle(Infinity), TypeError);
	});
	QUnit.test('undefined', function (assert) {
		assert.throws(() => rle(undefined), TypeError);
	});
	QUnit.test('Не тот тип', function (assert) {
		assert.throws(() => rle(10087), TypeError);
	});
});
