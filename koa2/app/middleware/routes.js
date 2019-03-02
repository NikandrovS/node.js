import Router from 'koa-router';
import product from '../models/query';
import convert from 'koa-convert';
import KoaBody from 'koa-body';

const router = new Router(),
    koaBody = convert(KoaBody());

router
// app.use( '/', express.static( path.join( __dirname, 'dist' ) ) );
    .get('/', async (ctx, next) => {
        // console.log(result[0].id+1);
        ctx.body = await product.getAll();
    })
    .get('/book/:id', async (ctx, next) => {
        let result = await product.get(ctx.params.id);
        if (result) {
            ctx.body = result;
        } else {
            ctx.status = 204
        }
    })
    .post('/book', koaBody, async (ctx, next) => {
        ctx.status = 201;
        ctx.body = await product.create(ctx.request.body)
    })
    // .put('/product/:id', koaBody, async (ctx, next) => {
    //     ctx.status = 204;
    //     await product.update(ctx.params.id, ctx.request.body);
    // })
    .delete('product/:id', async (ctx, next) => {
        ctx.status = 204;
        await product.delete(ctx.params.id);
    });

export function routes () { return router.routes() }
export function allowedMethods () { return router.allowedMethods() }
