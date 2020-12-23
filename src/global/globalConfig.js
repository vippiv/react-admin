export const BASE_PATH = 'http://192.168.31.24:9111'

export const PAG_CONFIG = {
	showQuickJumper: true,
	showSizeChanger: true,
	pageSizeOptions: ['5', '10', '20', '50'],
	showTotal: (total, range) => `${range[0]}条-${range[1]}条 共${total}条`
}