
require('./../../../db/config.test');
        const assert = require ('assert');
        const Controller = require('./../controller');
        describe('Pokemon Controller', () = > {

        //before((done) => {
        //	Controller.remove({}, (err, data) => done())
        //});

        var msg1 = 'Quando iniciamos sem pokemon e a listagem deve vir vazia'
                it('Deve retornar um array vazio', (done) = > {
                describe(msg1, () = > {
                var query = {}
                var callback = (err, data) = > {
                assert.equal(null, err, 'Err nao é nulo')
                        assert.notEqual(0, data.length, 'Lista veio vazia')
                        done()
                }

                Controller.find(query, callback);
                })
                })

                describe('Create', () = > {

                it('Quando cadastrar, o retorno deve ser o mesmo objeto adicionado _id', () = > {
                var mod = {
                name: 'Suissa',
                        attack: '9001',
                        defense: '8001'
                }

                var callback = (err, data) = > {
                // console.log('data_id', typeof data._id)

                assert.equal('object', typeof data._id)

                }


                Controller.create(mod, callback);
                })
                })

                describe('findOne', () = > {

                it('Deve retornar uma Query', (done) = > {
                var query = {
                _id:'57b0dacd57a6b5111d7bba55'
                }
                var callback = (err, data) = > {
                assert.equal(query._id, data._id, 'IDS DEVEM SER IGUAIS')
                        done()
                }

                Controller.findOne(query, callback);
                })
                })

                describe('remove', () = > {

                it('DEVE DELETAR', (done) = > {
                var query = {
                _id:'57b0dacec844b4221de01b4e'
                }
                var callback = (err, data) = > {
                assert.equal(data.result.ok, 1, 'result.ok = 1')
                        done()
                }

                Controller.remove(query, callback);
                })
                })

                describe('update', () = > {

                it('UPDATE', (done) = > {
                var query = {
                _id:'57b0dacf6f2041331db66ebf'
                }

                var mod = {
                name:'Leonan'
                }
                var callback = (err, data) = > {
                assert.equal(data.ok, 1, ' ok = 1');
                        done()

                }

                Controller.update(query, mod, callback);
                })
                })


        })



