import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

// 路由动画
/**
 * 导入动画符号以构建动画触发器、控制状态并管理状态之间的过渡。
 * 导出了一个名叫 slideInAnimation 的常量，并把它设置为一个名叫 routeAnimation 的动画触发器。
 * 定义一个转场动画，当在 heroes 和 hero 路由之间来回切换时，如果进入（:enter）应用视图则让组件从屏幕的左侧滑入，如果离开（:leave）应用视图则让组件从右侧划出。
 */
export const slideInAnimation = trigger('routeAnimation', [
    transition('heroes <=> hero', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
            query(':leave', [
                animate('300ms ease-out', style({ left: '100%' }))
            ]),
            query(':enter', [
                animate('300ms ease-out', style({ left: '0%' }))
            ])
        ]),
        query(':enter', animateChild()),
    ])
])